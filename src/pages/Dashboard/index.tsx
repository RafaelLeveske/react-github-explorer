import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github.</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/61164438?s=460&u=adeab63e92596927174349d3227ed3613f40f1cd&v=4"
          alt="Avatar"
        />
        <div>
          <strong>RafaelLeveske/github-explorer-frontend</strong>
          <p>
            Projeto front end em ReactJs referente ao modulo 3 do bootcamp
            GoStack 12.
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/61164438?s=460&u=adeab63e92596927174349d3227ed3613f40f1cd&v=4"
          alt="Avatar"
        />
        <div>
          <strong>RafaelLeveske/github-explorer-frontend</strong>
          <p>
            Projeto front end em ReactJs referente ao modulo 3 do bootcamp
            GoStack 12.
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/61164438?s=460&u=adeab63e92596927174349d3227ed3613f40f1cd&v=4"
          alt="Avatar"
        />
        <div>
          <strong>RafaelLeveske/github-explorer-frontend</strong>
          <p>
            Projeto front end em ReactJs referente ao modulo 3 do bootcamp
            GoStack 12.
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
