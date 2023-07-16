import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { userServices, ApiException } from '../../services';
import { Form } from '../../components';
import { BiSolidUserCircle } from 'react-icons/bi';

const loginSchema = z.object({
  email: z.string().email('Coloque um email válido'),
  password: z.string().min(8, 'Senha deve ter mínimo de 8 carácter'),
});

type LoginData = z.infer<typeof loginSchema>;

export function Login() {
  const navigate = useNavigate();
  const loginUserForm = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const {
    handleSubmit,
    formState: { isLoading },
  } = loginUserForm;

  const loginUser = async (data: LoginData) => {
    const { email, password } = data;
    const response = await userServices.login(email, password);

    if (response instanceof ApiException) {
      loginUserForm.setError('root', { message: response.message });
      return;
    }

    navigate('/');
  };

  return (
    <div className="login-body">
      <div className="card card-login shadow rounded">
        <div className="card-header bg-success h6 fw-normal lh-base text-white text-center ">
          <BiSolidUserCircle size={70} />
          <div>
            <small>Entre com sua conta</small>
          </div>
        </div>
        <div className="card-body">
          <FormProvider {...loginUserForm}>
            <Form.Root onSubmit={handleSubmit(loginUser)}>
              <Form.Field>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Input name="email" placeholder="Digite seu email" />
                <Form.ErrorMessage field="email" />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor="password">Senha</Form.Label>
                <Form.Input name="password" placeholder="Digite sua senha" />
                <Form.ErrorMessage field="password" />
              </Form.Field>

              <div className="text-center">
                <Form.ErrorMessage field="root" />
              </div>

              <Form.Button isLoading={isLoading} text="Entrar" />

              <Form.Link to="/criar-conta" text="Não possui uma conta?" />
            </Form.Root>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
