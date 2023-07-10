import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().email('Coloque um email válido'),
  password: z.string().min(8, 'Senha deve ter mínimo de 8 carácter'),
});

type LoginData = z.infer<typeof loginSchema>;

export function Login() {
  const { register, handleSubmit, formState } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { errors } = formState;

  const loginUser = (data: LoginData) => {
    console.log('Usuário logado', data);
  };

  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <div>
        <label htmlFor="email">
          Email:
          <input
            {...register('email')}
            id="email"
            type="email"
            placeholder="Digite seu email"
          />
        </label>

        {errors.email?.message && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">
          Senha:
          <input
            {...register('password')}
            id="password"
            type="password"
            placeholder="Digite sua senha"
          />
        </label>

        {errors.password?.message && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Fazer login</button>
    </form>
  );
}
