import angular from 'angular';
import app from './app';
import routes from './routes';
import './scss/main.scss';

app.config(routes);
app.value('apiUrl', process.env.API_URL || '/api/dogs');

angular.bootstrap(document, [app.name]);