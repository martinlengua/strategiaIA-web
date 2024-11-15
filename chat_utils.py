import os
from openai import OpenAI

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
openai_client = OpenAI(api_key=OPENAI_API_KEY)

def get_chatbot_response(prompt: str) -> str:
    try:
        system_prompt = """You are an AI assistant for strategIA, an AI solutions company. 
        Provide helpful, informative responses about AI services, machine learning, and technology solutions. 
        Keep responses concise and professional. Respond in Spanish."""
        
        response = openai_client.chat.completions.create(
            model="gpt-4o-mini",  # Using mini model for simple chat responses
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ]
        )
        content = response.choices[0].message.content
        if not content:
            raise ValueError("OpenAI returned an empty response.")
        return content
    except Exception as e:
        return f"Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta nuevamente más tarde."
