import { Repo, PR } from './repo';

const PRS: PR[] = [
  {
    assignees: [{login: 'Derek' }, {login: 'El Jefe' } ],
    title: 'Why wont you merge me?!?!?!',
    created_at: '02/13/19',
    updated_at: '02/13/19',
    status: 'RED', labels: ['merge me'],
    user: {login: 'drock'}
  },
  {
    assignees: [{login: 'Derek' }, {login: 'El Jefe' } ],
    title: 'This PR Is Getting Old',
    created_at: '02/13/19',
    updated_at: '02/13/19',
    status: 'YELLOW', labels: ['merge me'],
    user: {login: 'drock'}
  },
  {
    assignees: [{login: 'Derek' }, {login: 'El Jefe' } ],
    title: 'I changed code to do things',
    created_at: '02/13/19',
    updated_at: '02/13/19',
    status: 'GREEN', labels: ['merge me'],
    user: {login: 'drock'}
  }
];

export const REPOS: Repo[] = [
  { id: 12345, name: 'Integrate.Users', private: true, pullRequests: PRS },
  { id: 12345, name: 'Integrate.SampleRepo', private: true, pullRequests: PRS }
];
