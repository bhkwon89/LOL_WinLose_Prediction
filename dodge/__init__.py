"""
Simple Flask App 입니다.

간단한 플라스크 애플리케이션을 만들어 보면서
어떻게 동작을 하는지 살펴보세요!
"""
import os

import pandas as pd
from flask import Flask, render_template, request
from dodge.routes import view
import sqlite3





def create_app():
    app = Flask(__name__)
    # 플라스크 애플리케이션의 라우팅 설정입니다.
    # 서버 주소 + '/' 로 들어가면 아래 함수가 실행이 됩니다.

    app.register_blueprint(view.bp)

    @app.route('/')
    def input():
        """
        index 함수에서는 'simple_flask_app/templates' 폴더에 있는 'index.html'
        파일을 렌더링 해줘야 합니다!
        """
        return render_template("index.html"), 200

    return app

#
# if __name__ == "__main__":
#     app.run(debug=True)
