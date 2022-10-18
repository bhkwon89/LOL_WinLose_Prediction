# lol 승패 예측기
lol 캐릭터 선택창에서 얻을 수 있는 정보를 이용하여 승패를 예측

## flow
1. 아군의 티어, 아군의 챔프, 적의 챔프를 입력받는다.
2. lol.ps에서 받은 각 라인별 챔프 간 상대승률을 찾는다.
3. 상대승률과 아군 티어를 XGboost로 이진분류(승,패)

## link
http://lolwinloseprediction.herokuapp.com/
