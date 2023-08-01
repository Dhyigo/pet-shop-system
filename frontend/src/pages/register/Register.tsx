import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Card, Row } from 'react-bootstrap';
import { BiSolidUserCircle } from 'react-icons/bi';

import { Form } from '../../components';
import './Register.css';

const createRegisterSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
});

export function Register() {
  const createRegisterForm = useForm({
    resolver: zodResolver(createRegisterSchema),
  });

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
          <FormProvider {...createRegisterForm}>
            <Form.Root>
              <Form.Field>
                <Form.Label htmlFor="userName">Nome de usuário</Form.Label>
                <Form.Input
                  placeholder="Digite seu nome de usuário"
                  name="userName"
                />
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor="email">E-mail</Form.Label>
                <Form.Input placeholder="Digite seu E-mail" name="email" />
              </Form.Field>

              <Row>
                <Form.Field className="col-12 col-md-6">
                  <Form.Label htmlFor="password">Senha</Form.Label>
                  <Form.Input
                    type="password"
                    placeholder="Digite uma senha"
                    name="password"
                  />
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
                </Form.Field>
              </Row>
            </Form.Root>

            <Form.Button text="Criar conta" isLoading />
          </FormProvider>
        </Card.Body>
      </Card>
    </section>
  );
}
