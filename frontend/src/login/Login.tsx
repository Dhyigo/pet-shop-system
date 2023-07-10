/* eslint-disable jsx-a11y/label-has-associated-control */
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { userServices } from '../services/api/auth/authService';
import { ApiException } from '../services/api/ApiException';

const loginSchema = z.object({
  email: z.string().email('Coloque um email válido'),
  password: z.string().min(8, 'Senha deve ter mínimo de 8 carácter'),
});

type LoginData = z.infer<typeof loginSchema>;

export function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { errors } = formState;

  const loginUser = async (data: LoginData) => {
    const { email, password } = data;
    const responso = await userServices.login(email, password);

    if (responso instanceof ApiException) {
      alert(responso.message);
      return;
    }

    navigate('/');
  };

  return (
    <div className="card shadow rounded">
      <div className="card-header bg-success text-white text-center">
        Entre com sua conta
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(loginUser)}>
          <div className="form-row">
            <div className="col-12">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                {...register('email')}
                id="email"
                type="email"
                placeholder="Digite seu email"
              />

              {errors.email?.message && <span>{errors.email.message}</span>}
            </div>
          </div>
          <div className="form-row mt-3">
            <div className="col-12">
              <label htmlFor="password">Senha</label>
              <input
                className="form-control"
                {...register('password')}
                id="password"
                type="password"
                placeholder="Digite sua senha"
              />

              {errors.password?.message && (
                <span>{errors.password.message}</span>
              )}
            </div>
          </div>
          <div className="form-row mt-3">
            <div className="col-12">
              <button type="submit" className="btn btn-success">
                Entrar
              </button>
            </div>
          </div>
          <div className="form-row mt-3">
            <div className="col-12 text-center">
              <span className="notRegisteredText text-primary">
                Não possui uma conta?
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
