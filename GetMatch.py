import os
import sqlite3


def try_seleninum(driver, i, get):
    if get == 'winlose':
        tmp = driver.find_elements(By.XPATH, f"//table[2]/tbody/tr[{i}]/td[1]")
        answer = tmp[0].text

        return answer

    elif get == 'killrelation':


        tmp = driver.find_elements(By.XPATH, f"//table[2]/tbody/tr[{i}]/td[5]")
        if tmp[0].text == '-':
            return 0
        answer = int(tmp[0].text.replace("%", ""))

        return answer
    elif get == 'time':



        tmp = driver.find_elements(By.XPATH, f"//table[2]/tbody/tr[{i}]/td[10]/span[2]")
        answer = tmp[0].get_attribute('tipsy').split("게임종료: ")[1][:19]
        return answer

    elif get == 'cs':

        tmp = driver.find_elements(By.XPATH, f"//table[2]/tbody/tr[{i}]/td[9]/span")
        answer = tmp[0].text.split(" ")[1]
        return answer



DB_FILENAME = 'lol_account.db'
DB_FILEPATH = os.path.join(os.getcwd(), DB_FILENAME)


conn = sqlite3.connect(DB_FILEPATH)
cur = conn.cursor()
#
# cur.execute(f"""
#         DROP TABLE IF EXISTS ids;
#         """)
#




cur.execute(f"""
       CREATE TABLE IF NOT EXISTS ids(
            id VARCHAR[40] NOT NULL PRIMARY KEY,
            name VARCHAR[40] NOT NULL,

            day1_windlose VARCHAR[3]   NOT NULL,
            day1_killrelation INTEGER NOT NULL,
            day1_time VARCHAR[30]  NOT NULL,
            day1_cs INTEGER   NOT NULL,

            day2_windlose VARCHAR[3]   NOT NULL,
            day2_killrelation INTEGER NOT NULL,
            day2_time VARCHAR[30]  NOT NULL,
            day2_cs INTEGER   NOT NULL,

            day3_windlose VARCHAR[3]   NOT NULL,
            day3_killrelation INTEGER NOT NULL,
            day3_time VARCHAR[30]  NOT NULL,
            day3_cs INTEGER   NOT NULL,

            day4_windlose VARCHAR[3]   NOT NULL,
            day4_killrelation INTEGER NOT NULL,
            day4_time VARCHAR[30]  NOT NULL,
            day4_cs INTEGER   NOT NULL,

            day5_windlose VARCHAR[3]   NOT NULL,
            day5_killrelation INTEGER NOT NULL,
            day5_time VARCHAR[30]  NOT NULL,
            day5_cs INTEGER   NOT NULL,

            day6_windlose VARCHAR[3]   NOT NULL,
            day6_killrelation INTEGER NOT NULL,
            day6_time VARCHAR[30]  NOT NULL,
            day6_cs INTEGER   NOT NULL,

            day7_windlose VARCHAR[3]   NOT NULL,
            day7_killrelation INTEGER NOT NULL,
            day7_time VARCHAR[30]  NOT NULL,
            day7_cs INTEGER   NOT NULL,

            day8_windlose VARCHAR[3]   NOT NULL,
            day8_killrelation INTEGER NOT NULL,
            day8_time VARCHAR[30]  NOT NULL,
            day8_cs INTEGER   NOT NULL,

            day9_windlose VARCHAR[3]   NOT NULL,
            day9_killrelation INTEGER NOT NULL,
            day9_time VARCHAR[30]  NOT NULL,
            day9_cs INTEGER   NOT NULL,

            day10_windlose VARCHAR[3]   NOT NULL,
            day10_killrelation INTEGER NOT NULL,
            day10_time VARCHAR[30]  NOT NULL,
            day10_cs INTEGER   NOT NULL,

            day11_windlose VARCHAR[3]   NOT NULL,
            day11_killrelation INTEGER NOT NULL,
            day11_time VARCHAR[30]  NOT NULL,
            day11_cs INTEGER   NOT NULL,

            day12_windlose VARCHAR[3]   NOT NULL,
            day12_killrelation INTEGER NOT NULL,
            day12_time VARCHAR[30]  NOT NULL,
            day12_cs INTEGER   NOT NULL,

            day13_windlose VARCHAR[3]   NOT NULL,
            day13_killrelation INTEGER NOT NULL,
            day13_time VARCHAR[30]  NOT NULL,
            day13_cs INTEGER   NOT NULL,

            day14_windlose VARCHAR[3]   NOT NULL,
            day14_killrelation INTEGER NOT NULL,
            day14_time VARCHAR[30]  NOT NULL,
            day14_cs INTEGER   NOT NULL,

            day15_windlose VARCHAR[3]   NOT NULL,
            day15_killrelation INTEGER NOT NULL,
            day15_time VARCHAR[30]  NOT NULL,
            day15_cs INTEGER   NOT NULL,

            day16_windlose VARCHAR[3]   NOT NULL,
            day16_killrelation INTEGER NOT NULL,
            day16_time VARCHAR[30]  NOT NULL,
            day16_cs INTEGER   NOT NULL,

            day17_windlose VARCHAR[3]   NOT NULL,
            day17_killrelation INTEGER NOT NULL,
            day17_time VARCHAR[30]  NOT NULL,
            day17_cs INTEGER   NOT NULL,

            day18_windlose VARCHAR[3]   NOT NULL,
            day18_killrelation INTEGER NOT NULL,
            day18_time VARCHAR[30]  NOT NULL,
            day18_cs INTEGER   NOT NULL,

            day19_windlose VARCHAR[3]   NOT NULL,
            day19_killrelation INTEGER NOT NULL,
            day19_time VARCHAR[30]  NOT NULL,
            day19_cs INTEGER   NOT NULL,

            day20_windlose VARCHAR[3]   NOT NULL,
            day20_killrelation INTEGER NOT NULL,
            day20_time VARCHAR[30]  NOT NULL,
            day20_cs INTEGER   NOT NULL


           )
       """)

cur.close()

divisions = ['I', 'II', 'III', 'IV']

import pandas as pd
import time

from selenium import webdriver
from selenium.webdriver.common.by import By
import csv

options = webdriver.ChromeOptions()
# 창 숨기는 옵션 추가
options.add_argument("headless")


f = open('start.csv', 'r')
rdr = csv.reader(f)

for line in rdr:
    start = int(line[0])

for division in divisions:

    df = pd.read_csv("./account_ids_" + division + ".csv", index_col = 0)

    for index in range(start, len(df)):


            id = df.loc[index, 'summonerName']
            try:
                driver_fow = webdriver.Chrome('/TMP/chromedriver.exe', options=options)

                driver_fow.get(f"https://fow.kr/find/{id}")
            except:
                f = open('start.csv', 'w', newline='')
                wr = csv.writer(f)
                cur.close()
                wr.writerow([index])
                index = index - 1
                driver_fow.quit()
                continue



            if driver_fow.find_elements(By.CSS_SELECTOR, value='div.table_summary') == []:
                continue


            num_game = int(driver_fow.find_element(By.CSS_SELECTOR, value="body > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div.table_summary > div:nth-child(2) > div:nth-child(2)").text.split("\n")[-1].split("전")[0])
            if num_game < 20:
                continue

            try:
                driver_fow.find_element(By.CSS_SELECTOR, value='a.sbtn.new_recent_solorank').click()
            except:
                f = open('start.csv', 'w', newline='')
                wr = csv.writer(f)
                cur.close()
                wr.writerow([index])
                index = index -1
                driver_fow.quit()
                continue

            driver_fow.implicitly_wait(5)
            time.sleep(1.5)

            query = f"'{division}_{index}',"+f"'{id}',"
            count = 0

            for i in range(1, 30):
                if count == 20:
                    break
                try:
                    winlose = try_seleninum(driver_fow, i, 'winlose')
                except:
                    f = open('start.csv', 'w', newline='')
                    wr = csv.writer(f)
                    cur.close()
                    wr.writerow([index])

                    winlose = try_seleninum(driver_fow, i, 'winlose')


                if winlose == 'R':
                    continue


                try:
                    killrelation = try_seleninum(driver_fow, i, 'killrelation')
                except:
                    f = open('start.csv', 'w', newline='')
                    wr = csv.writer(f)
                    cur.close()
                    wr.writerow([index])

                    killrelation = try_seleninum(driver_fow, i, 'killrelation')

                try:
                    gametime = try_seleninum(driver_fow, i, 'time')
                except:
                    f = open('start.csv', 'w', newline='')
                    wr = csv.writer(f)
                    cur.close()
                    wr.writerow([index])

                    gametime = try_seleninum(driver_fow, i, 'time')
                try:
                    cs = try_seleninum(driver_fow, i, 'cs')
                except:
                    f = open('start.csv', 'w', newline='')
                    wr = csv.writer(f)
                    cur.close()
                    wr.writerow([index])
                    cs = try_seleninum(driver_fow, i, 'cs')

                count += 1


                df.loc[index, f'winlose_{i}'] = winlose
                df.loc[index, f'killrelation_{i}'] = killrelation
                df.loc[index, f'time_{i}'] = gametime
                df.loc[index, f'cs_{i}'] = cs

                query = query + f"'{winlose}'," + f'{killrelation},' + f"'{gametime}'," + f'{cs},'

            #print(f"INSERT INTO ids VALUES (" + f"{query}"[:-1] +")")

            conn = sqlite3.connect(DB_FILEPATH)
            cur = conn.cursor()

            print(index, i, id)

            cur.execute(f"INSERT INTO ids VALUES (" + f"{query}"[:-1] +")")
            #cur.execute(f"SELECT * From ids")

            cur.close()
            conn.commit()

            driver_fow.close()

    print(df)
cur.close()

