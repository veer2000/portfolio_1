from sqlalchemy import inspect, create_engine

engine = create_engine("sqlite:///./portfolio.db", connect_args={"check_same_thread": False})
insp = inspect(engine)

print("Tables in DB:", insp.get_table_names())

if "projects" in insp.get_table_names():
    print("\nSchema for 'projects':")
    for col in insp.get_columns("projects"):
        print(f"{col['name']} ({col['type']})")