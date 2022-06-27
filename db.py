import os
import sqlite3
import pandas as pd


DB_FILENAME = './champ.db'
DB_FILEPATH = os.path.join(os.getcwd(), DB_FILENAME)


conn = sqlite3.connect(DB_FILEPATH)
cur = conn.cursor()


df = pd.read_csv("champ_info.csv")


df = df.drop(['Unnamed: 0'], axis=1)
df = df.drop_duplicates()
df = df.reset_index(drop=True)

print(df)

cur.execute(f"""
       CREATE TABLE champs(
            champId INTEGER NOT NULL PRIMARY KEY,
            champName  VARCHAR[40] NOT NULL,

            topRate  REAL NOT NULL,
            jgRate    REAL NOT NULL,
            midRate REAL NOT NULL,
            adRate REAL NOT NULL,
            supRate REAL NOT NULL,

            winRate REAL NOT NULL,
            pickRate REAL NOT NULL,
            banRate REAL NOT NULL

           )
       """)
conn.commit()

print("!!!!!!!@SADSAD", len(df))
for i in range(len(df)):
    df.loc[i, 'topRate'] = float(df.loc[i, 'topRate'].replace("%", ""))
    df.loc[i, 'jgRate'] = float(df.loc[i, 'jgRate'].replace("%", ""))
    df.loc[i, 'midRate'] = float(df.loc[i, 'midRate'].replace("%", ""))
    df.loc[i, 'adRate'] = float(df.loc[i, 'adRate'].replace("%", ""))
    df.loc[i, 'supRate'] = float(df.loc[i, 'supRate'].replace("%", ""))

    df.loc[i, 'winRate'] = float(df.loc[i, 'winRate'].replace("%", ""))
    df.loc[i, 'pickRate'] = float(df.loc[i, 'pickRate'].replace("%", ""))
    df.loc[i, 'banRate'] = float(df.loc[i, 'banRate'].replace("%", ""))



for i in range(len(df)):
    print("!!!!", i)
    cur.execute("""insert  into  champs values (?,?,?,?,?,?,?,?,?,?)""", ( int(df.loc[i, 'champId']), df.loc[i, 'champName'], float(df.loc[i, 'topRate']),
                                                           float(df.loc[i, 'jgRate']), float(df.loc[i, 'midRate']), float(df.loc[i, 'adRate']), float(df.loc[i, 'supRate']),
                                                           float(df.loc[i, 'winRate']), float(df.loc[i, 'pickRate']), float(df.loc[i, 'banRate']) ))
    conn.commit()
conn.close()