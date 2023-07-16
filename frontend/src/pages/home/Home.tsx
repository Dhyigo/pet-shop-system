import { Header, Footer, Table } from '../../components';
import { BsSearch, BsFillCalendarCheckFill } from 'react-icons/bs';
import { MdPets } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { HiLocationMarker } from 'react-icons/hi';

export function Home() {
  return (
    <div>
      {/* TODO: REMOVER HEADER DAQUI, CRIAR UM BASE TEMPLATE (COM HEADER E NAVBAR/SIDEBAR)*/}
      <Header />

      <div className="row m-3">
        <div className="col-12">
          <div className="card mt-3 shadow">
            <div className="card-header bg-success text-white p-4">
              <div className="row">
                <div className="col-4 text-white">
                  <h3>
                    <BsSearch size={30} /> PetShops Próximas
                  </h3>
                </div>
                <div className="col-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text bg-light"
                        id="basic-addon1"
                      >
                        <BsSearch size={30} />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Encontre Petshops próximas"
                    />
                  </div>
                </div>
                <div className="col-4 text-center">
                  <div className="text-center">
                    <HiLocationMarker color="white" size={25} />
                  </div>
                  <small>Eldorado do sul, RS</small>
                </div>
              </div>
            </div>

            <div className="card-body p-0">
              <Table />
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>

      {/* TODO: COMPONENTIZAR CARDS*/}
      <div className="row m-3 mt-5">
        <div className="col-3">
          <div
            className="card shadow bg-success d-flex justify-content-center align-items-center text-white"
            style={{ height: '300px' }}
          >
            <MdPets size={100} color="white" />
            <h4 className="mt-5">Meus PETS</h4>
          </div>
        </div>
        <div className="col-3">
          <div
            className="card shadow bg-success d-flex justify-content-center align-items-center text-white"
            style={{ height: '300px' }}
          >
            <BsFillCalendarCheckFill size={100} color="white" />
            <h4 className="mt-5">Agendamentos</h4>{' '}
          </div>
        </div>
        <div className="col-3">
          <div
            className="card shadow bg-success d-flex justify-content-center align-items-center text-white"
            style={{ height: '300px' }}
          >
            <ImProfile size={100} color="white" />
            <h4 className="mt-5">Minha conta</h4>{' '}
          </div>
        </div>
        <div className="col-3">
          <div
            className="card shadow bg-success d-flex justify-content-center align-items-center text-white"
            style={{ height: '300px' }}
          >
            <SiHomeassistantcommunitystore size={100} color="white" />
            <h4 className="mt-5">Minha empresa</h4>{' '}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
