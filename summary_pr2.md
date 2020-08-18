[__dirname в JavaScript](// https://yandex.ru/turbo?text=https%3A%2F%2Fru.hexlet.io%2Fblog%2Fposts%2Fchto-takoe-__dirname-v-javascript)

## Подключение test coverage на codclima  

- на ```codclima```  в разделе ```test coverage``` скопировать TEST REPORTER ID  
- на гитхабе в свойствах (шестеренка) репозиторя  в ```secrets```  добавить секретную переменную  
- в ```.github/workflows/nodejs.yml``` добавить:
```
env:
         CC_TEST_REPORTER_ID: ${{ secrets.CC_TEST_REPORTER_ID }}
       with:
         coverageCommand: make test-coverage
         debug: true
```  
вот и всё ))
