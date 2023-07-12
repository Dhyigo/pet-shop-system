import { Header } from '../../components';
import { BsSearch } from 'react-icons/bs';

export function Home() {
  return (
    <div>
      <Header />
      {/* WIP: apenas montando ideias inicias do layout, n precisa refatorar */}
      <div className="row">
        <div className="col-12 m-l-5 mr-5 mt-5 text-center">
          <h3>
            <BsSearch size={40} />
            Petshop proximas
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-12">
          <table className="table table-success shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>

              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              Encontrar PetShops próximas
            </div>
            <div className="card-body">
              Aqui a ideia é criar um sistema de busca para de petshops com base
              na localização do usuário (talvez usando apis de gps?)
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              Histórico agendamentos
            </div>
            <div className="card-body">
              Ver histórico de agendamentos que o usuário fez, exibindo
              informações como: Dia, horário, pet, empresa que realizou o
              serviço, valores e etc
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card shadow">
            <div className="card-header bg-success text-white">Meus pets</div>
            <div className="card-body">
              Sistema de cadastro de pets, cada conta de usuário pode cadastrar
              um perfil de seu pet que será vinculado a sua conta
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              Abrir empresa
            </div>
            <div className="card-body">
              Sistema onde um usuário de conta do tipo: NORMAL, pode transformar
              sua conta para o tipo: EMPRESARIAL, onde ela irá fornecer seu
              serviço de petshop para usuário normals. Contas empresariais
              possuirão funcionalidades diferentes dentro do sistema.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
