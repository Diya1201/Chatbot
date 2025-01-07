const responses = {
  "hello":
    "How can I help you",

  "how do i search for people given their current title, current company and location?":
    "You can use api.crustdata.com/screener/person/search endpoint. Example: Use filters for 'engineer at OpenAI in San Francisco'.",
  
  "what is the region standard?":
    "Refer to the region list: https://crustdata-docs-region-json.s3.us-east-2.amazonaws.com/updated_regions.json",

  "how do i get data on companies?":
    "You can use api.crustdata.com/screener/company/search to fetch company data. For example, 'Search for tech companies in New York'.",

  "what is Crustdata?":
    "Crustdata is a platform that provides API solutions for various data and information retrieval needs. You can access different endpoints for searching people, companies, and more.",

  "how do i use the API?":
    "To use the API, first obtain an API key from crustdata.com. Then, authenticate and make requests to endpoints as per the documentation.",

  "what kind of data can I search for?":
    "You can search for people, companies, locations, job titles, and more using specific filters in the API.",

  "can I export the data?":
    "Yes, the API allows you to export the data in JSON format for further processing.",

  "how do I report a bug?":
    "To report a bug, visit the support page on crustdata.com and fill out the bug report form with the necessary details.",

  default: "Sorry, I don't have an answer for that.",
};

export default responses;
