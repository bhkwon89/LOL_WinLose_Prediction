import pandas as pd
import sqlite3
import os

DB_FILENAME = 'lol_account.db'
DB_FILEPATH = os.path.join(os.getcwd(), DB_FILENAME)

conn = sqlite3.connect(DB_FILEPATH)
cur = conn.cursor()

cur.execute("""
    SELECT * FROM ids
""")

rowList = cur.fetchall()

for row in rowList:
    print(row)