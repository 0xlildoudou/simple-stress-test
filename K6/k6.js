import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 50 },
    { duration: '1m30s', target: 50 },
    { duration: '30s', target: 0 },
  ],

  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  const URL = __ENV.URL
  http.get( URL );

  sleep(1);
}
