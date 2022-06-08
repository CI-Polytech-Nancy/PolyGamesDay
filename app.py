from datetime import datetime
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def main():
    with open('count.log', 'a') as file:
        file.write(f'[{datetime.now().strftime("%d/%m/%Y %H:%M:%S")}] - REQ {request.remote_addr}\n')

    return render_template('index.html')


@app.route('/mentions-legales')
def mentions():
    return render_template('mentions-legales.html')
