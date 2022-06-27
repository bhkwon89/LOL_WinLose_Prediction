import pandas as pd

#!pip install --upgrade sklearn


# from lightgbm import LGBMRegressor
# from category_encoders import TargetEncoder
from sklearn.impute import SimpleImputer
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import RandomizedSearchCV
from sklearn.preprocessing import StandardScaler
from scipy.stats import randint, uniform

# pipe = make_pipeline(
#     SimpleImputer(),
#     StandardScaler()
# )

pipe = make_pipeline(
    SimpleImputer(),
    StandardScaler(),
    TargetEncoder(),
    LGBMRegressor()
)

dists = {
    'targetencoder__smoothing': [2., 20., 50., 60., 100., 500., 1000.],  # int로 넣으면 error(bug)
    'targetencoder__min_samples_leaf': randint(1, 10),  # randint 로 범위를 지정
    'simpleimputer__strategy': ['mean', 'median'],
    'lgbmregressor__n_estimators': [int(x) for x in np.linspace(start=200, stop=600, num=41)],
    'lgbmregressor__max_depth': [int(x) for x in np.linspace(200, 500, num=41)],
    # 'lgbmclassifier__num_leaves': [int(x) for x in np.linspace(2, 1000, num = 31)],
    # 'lgbmclassifier__min_child_samples': [int(x) for x in np.linspace(1, 100, num = 11)],
    # 'lgbmclassifier__learning_rate ': [float(x) for x in np.linspace(0.000001, 0.5, num = 41)],
    'lgbmregressor__learning_rate': [0.0001, 0.0005, 0.001, 0.005, 0.01, 0.05, 0.1]
}
pipe.get_params()



from sklearn.metrics import r2_score

clf = RandomizedSearchCV(
    pipe,
    param_distributions = dists,
    n_iter = 10,
    cv = tscv,
    scoring = 'neg_root_mean_squared_error',
    verbose = 10,
    n_jobs = 1
)
clf.fit(X_train, y_train)

clf.best_params_

clf.best_score_
