import requests
import pandas as pd
import time
from urllib import parse


# 0. 게임 판수가 많은 아이디 가져오기
df = pd.read_csv("account_ids_platinum.csv", index_col=0)

df = df.sort_values(by='gamenum', ascending=False)
df = df[1:].reset_index(drop=True)

#print(df.loc[1000, "summonerName"])
api_key = "RGAPI-853f0c1e-9657-4e59-a4a7-2c2ac280c893"

# 1. 아이디로 puuid 가져오기

df['match_ids'] = [[]*100]*len(df)
start = 0
for i in range(10000):
    if df['match_ids'][i] == []:
        start = i
        break

for i in range(start, 3000):
    time.sleep(1.5)
    summonerName = df.loc[i, "summonerName"]
    result = parse.quote(summonerName)
    print(i)
    ids_url = f"https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/{result}"+ '?api_key=' + api_key
    #
    #print(ids_url)
    try:
        r = requests.get(ids_url)
    except:
        df.to_csv("./account_ids_platinum.csv")


    if r.status_code != 200:
        print("error, ", i)
        i=i-1
        continue

    time.sleep(1.5)
    match_url = f"https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{r.json()['puuid']}/ids?start=0&count=100" + '&api_key=' + api_key
    try:
        r2 = requests.get(match_url)
    except:
        df.to_csv("./account_ids_platinum.csv")

    if r2.status_code != 200:
        print("error, ", i)
        i = i-1
        continue



    df['match_ids'][i] = r2.json()

df.to_csv("./account_puuid")

for i in range(3000, 6000):
    time.sleep(1.5)
    summonerName = df.loc[i, "summonerName"]
    result = parse.quote(summonerName)
    print(i)
    ids_url = f"https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/{result}"+ '?api_key=' + api_key
    #
    #print(ids_url)
    try:
        r = requests.get(ids_url)
    except:
        df.to_csv("./account_ids_platinum.csv")


    if r.status_code != 200:
        print("error, ", i)
        i=i-1
        continue

    time.sleep(1.5)
    match_url = f"https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{r.json()['puuid']}/ids?start=0&count=100" + '&api_key=' + api_key
    try:
        r2 = requests.get(match_url)
    except:
        df.to_csv("./account_ids_platinum.csv")

    if r2.status_code != 200:
        print("error, ", i)
        i = i-1
        continue



    df['match_ids'][i] = r2.json()

df.to_csv("./account_puuid")



for i in range(6000, 10000):
    time.sleep(1.5)
    summonerName = df.loc[i, "summonerName"]
    result = parse.quote(summonerName)
    print(i)
    ids_url = f"https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/{result}"+ '?api_key=' + api_key
    #
    #print(ids_url)
    try:
        r = requests.get(ids_url)
    except:
        df.to_csv("./account_ids_platinum.csv")


    if r.status_code != 200:
        print("error, ", i)
        i=i-1
        continue

    time.sleep(1.5)
    match_url = f"https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{r.json()['puuid']}/ids?start=0&count=100" + '&api_key=' + api_key
    try:
        r2 = requests.get(match_url)
    except:
        df.to_csv("./account_ids_platinum.csv")

    if r2.status_code != 200:
        print("error, ", i)
        i = i-1
        continue



    df['match_ids'][i] = r2.json()

df.to_csv("./account_puuid")




# ids_url = f" https://kr.api.riotgames.com/lol/league/v4/entries/{queue}/{tier}/{division}" + f'?page={page_num}' + '&api_key=' + api_key
# r6 = requests.get(ids_url)