import os
from flask import Flask, jsonify, request, abort,render_template, url_for,json

import re
import json
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/crime-charts.html')
def crime_charts():
    return render_template('crime-charts.html')


@app.route('/crime-data.html')
def crime_locator():
    return render_template('crime-data.html')

@app.route('/crime-map.html')
def crime_map():
    return render_template('crime-map.html')

if __name__ == "__main__":
    app.run(debug=True)