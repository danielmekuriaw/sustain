import certifi
import json
import openai
import os
from metaphor_python import Metaphor
from urllib.request import urlopen

openai.api_key = os.environ.get('OPENAI_API_KEY')
FINANCIAL_MODELING_API_KEY = os.environ.get('FINANCIAL_MODELING_API_KEY')
METAPHOR_API_KEY = os.environ.get('METAPHOR_API_KEY')
metaphor = Metaphor(METAPHOR_API_KEY)

# Get the stock exchange symbol given a company name
def get_stock_symbol(company_name):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": f"The stock exchange symbol for {company_name} is: "},
        ],
        max_tokens = 10
    )
    
    # Returning stock exchange symbol
    return response.choices[0].message.content

# Get the ESG data for a company given its stock exchange symbol
def get_esg_data(symbol):
    url = f"https://financialmodelingprep.com/api/v4/esg-environmental-social-governance-data?symbol={symbol}&apikey={FINANCIAL_MODELING_API_KEY}"
    response = urlopen(url, cafile=certifi.where())    
    data = response.read().decode("utf-8")

    return json.loads(data)

def get_company_summary(company_name):
    
    USER_QUESTION = f"What's recent and most important sustainability related news on {company_name} (after October 2021)?"
    SYSTEM_MESSAGE = "You are a helpful assistant that generates search queries based on user questions. Only generate one search query."

    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": SYSTEM_MESSAGE},
            {"role": "user", "content": USER_QUESTION},
        ],
    )

    query = completion.choices[0].message.content
    search_response = metaphor.search(
        query, use_autoprompt=True, start_published_date="2021-10-01"
    )
    
    # Combine contents of the top 5 articles
    combined_articles = "\n\n".join([result.extract for result in search_response.get_contents().contents[:5]])
    
    PROMPT = f"You are a helpful assistant that writes a short 60 words long summary paragraph about the sustainability practices of {company_name} based on historical knowledge you have of the company and the following articles in simple day-to-day language:\n{combined_articles}"
    USER_QUESTION = "From what you historically know about {company_name} and those articles, what are some sustainability insights regarding {company_name} (in 60 words)?"

    # Use GPT-3 to summarize the combined content of the articles and extract insights.
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-16k",
        messages=[
            {"role": "system", "content": USER_QUESTION},
            {"role": "user", "content": PROMPT},
        ],
    )

    combined_summary = completion.choices[0].message.content
    return combined_summary

company_name = input()
stock_symbol = get_stock_symbol(company_name)
print(stock_symbol)
print('')
print(get_esg_data(stock_symbol))
print('')
print(get_company_summary(company_name))