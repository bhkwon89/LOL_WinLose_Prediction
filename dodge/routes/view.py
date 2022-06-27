import pandas as pd
from flask import Flask, render_template, request
from flask import Blueprint
import sqlite3
import os

import sklearn


bp = Blueprint('view', __name__, url_prefix='/result')




@bp.route('/',methods = ['GET', 'POST'])
def result():
    print(request)

    #return "2", 200
    DB_FILENAME = './champ.db'
    DB_FILEPATH = os.path.join(os.getcwd(), DB_FILENAME)

    conn = sqlite3.connect(DB_FILEPATH)
    cur = conn.cursor()


    import pandas as pd
    # df = pd.DataFrame(columns=columns)
    # dict_r = dict(request.get_json())
    dict_r = {}
    for s in (str(request).split("?")[1].split("&")):
        if 'red_sup_champ' in s:
            key = 'red_sup_champ'
            value = s.split("=")[1].split("'")[0]
            dict_r[key] = value
        else:
            key = s.split("=")[0]
            value = s.split("=")[1]
            dict_r[key] = value
    #print(dict_r.items())
    keys = list(dict_r.keys())

    for key in keys :
        #print(key)
        if 'champ' in key:
            cur.execute(f"""SELECT * from champs Where champName = \"{dict_r[key]}\"""")
            tmp = cur.fetchone()
            #print(tmp)
            if 'blue' in key:
                if 'top' in key:
                    dict_r['blue_top_laneRate'] = tmp[2]
                    dict_r['blue_top_winRate'] = tmp[-3]
                    dict_r['blue_top_pickRate'] = tmp[-2]
                    dict_r['blue_top_banRate'] = tmp[-1]

                elif 'jg' in key:
                    dict_r['blue_jg_laneRate'] = tmp[3]
                    dict_r['blue_jg_winRate'] = tmp[-3]
                    dict_r['blue_jg_pickRate'] = tmp[-2]
                    dict_r['blue_jg_banRate'] = tmp[-1]

                elif 'mid' in key:
                    dict_r['blue_mid_laneRate'] = tmp[4]
                    dict_r['blue_mid_winRate'] = tmp[-3]
                    dict_r['blue_mid_pickRate'] = tmp[-2]
                    dict_r['blue_mid_banRate'] = tmp[-1]

                elif 'ad' in key:
                    dict_r['blue_ad_laneRate'] = tmp[5]
                    dict_r['blue_ad_winRate'] = tmp[-3]
                    dict_r['blue_ad_pickRate'] = tmp[-2]
                    dict_r['blue_ad_banRate'] = tmp[-1]

                elif 'sup' in key:
                    dict_r['blue_sup_laneRate'] = tmp[6]
                    dict_r['blue_sup_winRate'] = tmp[-3]
                    dict_r['blue_sup_pickRate'] = tmp[-2]
                    dict_r['blue_sup_banRate'] = tmp[-1]


                else:
                    pass

            else:
                if 'top' in key:
                    dict_r['red_top_laneRate'] = tmp[2]
                    dict_r['red_top_winRate'] = tmp[-3]
                    dict_r['red_top_pickRate'] = tmp[-2]
                    dict_r['red_top_banRate'] = tmp[-1]

                elif 'jg' in key:
                    dict_r['red_jg_laneRate'] = tmp[3]
                    dict_r['red_jg_winRate'] = tmp[-3]
                    dict_r['red_jg_pickRate'] = tmp[-2]
                    dict_r['red_jg_banRate'] = tmp[-1]

                elif 'mid' in key:
                    dict_r['red_mid_laneRate'] = tmp[4]
                    dict_r['red_mid_winRate'] = tmp[-3]
                    dict_r['red_mid_pickRate'] = tmp[-2]
                    dict_r['red_mid_banRate'] = tmp[-1]

                elif 'ad' in key:
                    dict_r['red_ad_laneRate'] = tmp[5]
                    dict_r['red_ad_winRate'] = tmp[-3]
                    dict_r['red_ad_pickRate'] = tmp[-2]
                    dict_r['red_ad_banRate'] = tmp[-1]

                elif 'sup' in key:
                    dict_r['red_sup_laneRate'] = tmp[6]
                    dict_r['red_sup_winRate'] = tmp[-3]
                    dict_r['red_sup_pickRate'] = tmp[-2]
                    dict_r['red_sup_banRate'] = tmp[-1]


                else:
                    pass

    #print(dict_r)
    X_predict = pd.DataFrame().from_dict([dict_r])
    #
    # for i in range(len(columns)):
    #     X_predict.append([dict_r[columns[i]]])

    #print(X_predict)




    import pickle

    PKL_FILENAME = './model.pkl'
    PKL_FILEPATH = os.path.join(os.getcwd(), PKL_FILENAME)
    model = None
    with open(PKL_FILEPATH, 'rb') as pickle_file:
        model = pickle.load(pickle_file)



    y_pred = model.predict(X_predict)
    if y_pred == 0:
        msg = "승리할 것으로 예상 됩니다."
    else:
        msg = "패배할 것으로 예상 됩니다."


    return msg, 200