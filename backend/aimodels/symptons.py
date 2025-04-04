import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

# ✅ Load dataset
dataset = pd.read_csv("Training.csv")

# ✅ Prepare features and target
X = dataset.drop("prognosis", axis=1)
y = dataset["prognosis"]

# ✅ Encode target labels
le = LabelEncoder()
y_encoded = le.fit_transform(y)

# ✅ Save LabelEncoder mapping for later use
with open("label_encoder.pkl", "wb") as f:
    pickle.dump(le, f)

# ✅ Split dataset
X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.3, random_state=20)

# ✅ Train SVC model
svc = SVC(kernel="linear")
svc.fit(X_train, y_train)

# ✅ Evaluate model
ypred = svc.predict(X_test)
print(f"SVC Accuracy: {accuracy_score(y_test, ypred)}")

# ✅ Save trained model with highest protocol
with open("svc.pkl", "wb") as f:
    pickle.dump(svc, f, protocol=pickle.HIGHEST_PROTOCOL)

# ✅ Save symptom feature names (to avoid JSON issues)
symptom_names = list(X.columns)
with open("symptoms_list.pkl", "wb") as f:
    pickle.dump(symptom_names, f)

print("🎉 Model retrained and saved as 'svc.pkl'!")
