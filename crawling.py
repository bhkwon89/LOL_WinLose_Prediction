# RGAPI-4f3e54e6-09c8-49c8-ba2c-41455c261735
#
# 입력 : 현재 아이디들.
# 피쳐 : 각 인원들의 승률, 인원들의 지난 10게임, 랭크, 게임 수 승패, 킬, 데스, 어시, 선택한 포지션, 걸린 포지션, 각 인원 모스트 5개.
# 상대 픽, 상대 밴, 아군 픽, 아군 밴.

import requests

main_url = "https://kr.api.riotgames.com"
api_key = 'RGAPI-bcc3cd4c-d37c-4440-bf5c-c192ff83084c'
# def get_request(main_url, input_url, target1 ,):
#
#     main_url = "https://kr.api.riotgames.com"
#     api_key = 'RGAPI-b38b0d3b-f093-43d4-b7d5-693c6d55b443'
#
#     url = main_url + input_url +'?api_key=' + api_key
#


#
# summonerName = "쁘띠양아치"
#
# ## 1. 아이디의 puuid
# puuid_url = main_url + f"/lol/summoner/v4/summoners/by-name/{summonerName}" +'?api_key=' + api_key
# r = requests.get(puuid_url)
#
# encryptedSummonerId = r.json()['id']
# puuid = r.json()['puuid']
# print(puuid)
#
# ## 2. 랭크 티어
# tier_url = main_url + f"/lol/league/v4/entries/by-summoner/{encryptedSummonerId}" + '?api_key=' + api_key
# r2  = requests.get(tier_url)
#
# print(r2.json())
#
# ## 3. 챔피언 숙련도
# mastery_url = main_url + f"/lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}" +'?api_key=' + api_key
# r3  = requests.get(mastery_url)
# print(r3.json())
#
# #
# # # 4. 티어별 아이디 가져오기
# # for i in range(1,6):
# #     platinum_id = ''
# #     diamond_id = ''
# #
# #     queue = 'RANKED_SOLO_5x5'
# #     tiers = ['DIAMOND', 'PLATINUM']
# #     divisions = ['I', 'II', 'III', 'IV']
# #
# #     for tier in tiers:
# #         for division in divisions:
# #
# #             division.append
# #
# #             league_url = f'https://kr.api.riotgames.com/lol/league/v4/entries/{queue}/{tier}/{division}?api_key=' + api_key
# #             league_request = requests.get(league_url)
# #             append(league_request.json())
#
#
# # 5. 특정 아이디의 최근 20개 match id 가져오기  /lol/match/v5/matches/by-puuid/{puuid}/ids
# # 	2022년 6월 8일 수요일
#
# matchIds_url = f"https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids"  +'?api_key=' + api_key
# r4 = requests.get(matchIds_url)
# print(r4.json())
#
# matchId = r4.json()[0]
# match_url =f"https://asia.api.riotgames.com/lol/match/v5/matches/{matchId}" +'?api_key=' + api_key
# r5 = requests.get(match_url)
# print(r5.json()['info'])
# info = r5.json()['info']
# print(info['gameCreation'])
#
# from datetime import datetime
# dt_object = datetime.fromtimestamp(info['gameCreation']/1000)
# print(dt_object)

queue = "RANKED_SOLO_5x5"
tier = "PLATINUM"
divisions = ["I", "II"]
divisions2 = ["III", "IV"]
page_num = 1

#
# ids_url = f" https://kr.api.riotgames.com/lol/league/v4/entries/{queue}/{tier}/{divisions[0]}"+'?page=1'+'&api_key=' + api_key
# r6 = requests.get(ids_url)
# print(r6.json())
#

import pandas as pd
import time

df = pd.DataFrame()


# division(각 티어별 숫자)과 페이지만 반복문 돌리면 됨
for division in divisions2:

    page_num = 1
    ids_url = f" https://kr.api.riotgames.com/lol/league/v4/entries/{queue}/{tier}/{division}" + f'?page={page_num}' + '&api_key=' + api_key
    r6 = requests.get(ids_url)


    time.sleep(1.3)
    count = 1


    while r6.json() != []:

        print("current iter :" ,division, ", ", page_num)

        r6 = requests.get(ids_url)
        # if count == 3:
        #     break
        count +=1
        tmp_df = pd.DataFrame(r6.json())
        df = pd.concat([df, tmp_df])

        # print(ids_url)
        # print(tmp_df)

        page_num = page_num + 1
        str_page = f"{page_num}"

        ids_url = f" https://kr.api.riotgames.com/lol/league/v4/entries/{queue}/{tier}/{division}" + f'?page={page_num}' + '&api_key=' + api_key
        time.sleep(1.3)

    df = df.reset_index()
    df.to_csv(f"./account_ids_{division}.csv")



