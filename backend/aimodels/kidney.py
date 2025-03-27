import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import pickle  # Import pickle

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load Dataset
url = 'https://raw.githubusercontent.com/nileshgawli/datasets/refs/heads/main/kidney_disease.csv'

try:
    data = pd.read_csv(url)
    print("Data loaded successfully!")
except Exception as e:
    print(f"An error occurred: {e}")

# Drop ID Column
data.drop('id', axis=1, inplace=True)

# Clean classification column
data['classification'] = data['classification'].str.strip()  # Remove spaces/tabs
data['classification'] = data['classification'].replace({'ckd': 1, 'notckd': 0})
data['classification'] = data['classification'].astype(int)  # Ensure integer type

# Drop missing values
df = data.dropna().reset_index(drop=True)

# Fix incorrect values in wc, pcv, rc
df['wc'] = df['wc'].replace(["\t6200", "\t8400"], [6200, 8400])
df['pcv'] = pd.to_numeric(df['pcv'], errors='coerce')
df['wc'] = pd.to_numeric(df['wc'], errors='coerce')
df['rc'] = pd.to_numeric(df['rc'], errors='coerce')
df.dropna(subset=['pcv', 'wc', 'rc'], inplace=True)

# Convert categorical columns
dictonary = {
    "rbc": {"abnormal": 1, "normal": 0},
    "pc": {"abnormal": 1, "normal": 0},
    "pcc": {"present": 1, "notpresent": 0},
    "ba": {"notpresent": 0, "present": 1},
    "htn": {"yes": 1, "no": 0},
    "dm": {"yes": 1, "no": 0},
    "cad": {"yes": 1, "no": 0},
    "appet": {"good": 1, "poor": 0},
    "pe": {"yes": 1, "no": 0},
    "ane": {"yes": 1, "no": 0}
}
df.replace(dictonary, inplace=True)

# Define features and target
X = df.drop(['classification', 'sg', 'appet', 'rc', 'pcv', 'hemo', 'sod'], axis=1)
y = df['classification']

# Ensure X is numeric
X = X.apply(pd.to_numeric, errors='coerce')

# Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Model
model = RandomForestClassifier(n_estimators=20, random_state=42)
model = RandomForestClassifier(n_estimators=20, random_state=42)
model.fit(X_train, y_train)

print("Model trained successfully!")

# Save model using pickle
with open("kidney_disease_model.pkl", "wb") as file:
    pickle.dump(model, file)

print("Model saved as 'kidney_disease_model.pkl'")
