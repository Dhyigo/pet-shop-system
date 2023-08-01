import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Card, Row } from 'react-bootstrap';
import { BiSolidUserCircle } from 'react-icons/bi';

import { Form } from '../../components';
import './Register.css';
import { ApiException, userServices } from '../../services';

const createUserSchema = z
  .object({
    userName: z.string().nonempty('Nome de usuário é obrigatório'),
    email: z.string().email('Coloque um email válido'),
    password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
    confirmPassword: z.string().nonempty('Não pode está vazio'),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Não está igual a senha',
    path: ['confirmPassword'],
  })
  .transform((data) => {
    const { confirmPassword, ...rest } = data;
    return rest;
  });

type CreateUserData = z.infer<typeof createUserSchema>;

export function Register() {
  const navigate = useNavigate();

  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
    mode: 'onBlur',
  });

  const {
    handleSubmit,
    formState: { isLoading },
  } = createUserForm;

  const createUser = async (data: CreateUserData) => {
    const response = await userServices.create(data);

    if (response instanceof ApiException) {
      createUserForm.setError('root', { message: response.message });
      return;
    }

    navigate('/');
  };

  return (
    <section className="register-body">
      <Card className="shadow card-register ">
        <Card.Header className="d-flex flex-column align-items-center justify-content-start gap-1 bg-success fw-normal text-light">
          <BiSolidUserCircle size={70} />
          <Card.Title className="m-0 small fw-normal">
            Faça seu registro
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <FormProvider {...createUserForm}>
            <Form.Root onSubmit={handleSubmit(createUser)}>
              <Form.Field>
                <Form.Label htmlFor="userName">Nome de usuário</Form.Label>
                <Form.Input
                  placeholder="Digite seu nome de usuário"
                  name="userName"
                />
                <Form.ErrorMessage field="userName" />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor="email">E-mail</Form.Label>
                <Form.Input placeholder="Digite seu E-mail" name="email" />
                <Form.ErrorMessage field="email" />
              </Form.Field>

              <Row>
                <Form.Field className="col-12 col-md-6">
                  <Form.Label htmlFor="password">Senha</Form.Label>
                  <Form.Input
                    type="password"
                    placeholder="Digite uma senha"
                    name="password"
                  />
                  <Form.ErrorMessage field="password" />
                </Form.Field>

                <Form.Field className="col-12 col-md-6">
                  <Form.Label htmlFor="confirmPassword">
                    Confirma senha
                  </Form.Label>
                  <Form.Input
                    type="password"
                    placeholder="Repetir a senha"
                    name="confirmPassword"
                  />
                  <Form.ErrorMessage field="confirmPassword" />
                </Form.Field>
              </Row>
              <div className="text-center">
                <Form.ErrorMessage field="root" />
              </div>
              <Form.Button text="Criar conta" isLoading={isLoading} />
            </Form.Root>
          </FormProvider>
        </Card.Body>
      </Card>
    </section>
  );
}
