import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
import time

##########################################################################################################################
           # lol.ps에서 뽑기
############################################################################################################################


header = {'User-Agent':"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"}
df = pd.read_csv("lolps_champ_id.csv", index_col = 0)


columns = ['champId', 'champName', 'topRate', 'jgRate', 'midRate', 'adRate', 'supRate', 'winRate', 'pickRate', 'banRate']
index = range(len(df))
df= df.reset_index()
print( df['id'][0] )
df_result = pd.DataFrame(index=index, columns=columns)

for i in range(len(df)):
    champ_id = df['id'][i]
    #print(champ_id)
    # print(f"https://lol.ps/ko/champ/{champ_id}/statistics/?version=37")
    time.sleep(1.2)
    op_page = requests.get(f"https://lol.ps/ko/champ/{champ_id}/statistics/?version=37")
    soup = bs(op_page.text, "html.parser")


    top_rate = soup.select("#summary_form > div.form-custom-radio.largeicon > div:nth-child(1) > label > b")[0].text
    jg_rate = soup.select("#summary_form > div.form-custom-radio.largeicon > div:nth-child(2) > label > b")[0].text
    mid_rate = soup.select("#summary_form > div.form-custom-radio.largeicon > div:nth-child(3) > label > b")[0].text
    ad_rate = soup.select("#summary_form > div.form-custom-radio.largeicon > div:nth-child(4) > label > b")[0].text
    sup_rate = soup.select("#summary_form > div.form-custom-radio.largeicon > div:nth-child(5) > label > b")[0].text

    win_rate = soup.select("#common > div.stats > div.stat-item.percent > div:nth-child(1) > p")[0].text
    pick_rate = soup.select("#common > div.stats > div.stat-item.percent > div:nth-child(2) > p")[0].text
    ban_rate = soup.select("#common > div.stats > div.stat-item.percent > div:nth-child(3) > p")[0].text

    df_result.loc[i, 'champId'] = champ_id
    df_result.loc[i, 'champName'] = df['champ_name'][i]

    df_result.loc[i, 'topRate'] = top_rate
    df_result.loc[i, 'jgRate'] = jg_rate
    df_result.loc[i, 'midRate'] = mid_rate
    df_result.loc[i, 'adRate'] = ad_rate
    df_result.loc[i, 'supRate'] = sup_rate

    df_result.loc[i, 'winRate'] = win_rate
    df_result.loc[i, 'pickRate'] = pick_rate
    df_result.loc[i, 'banRate'] = ban_rate

df_result.to_csv("./champ_info.csv")

