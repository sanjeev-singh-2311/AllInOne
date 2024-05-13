from starlette.config import Config

config = Config('.env')

DATABASE_URL = f"sqlite://{config.get('DATABASE_LOCATION')}/{config.get('DATABASE_NAME')}"
