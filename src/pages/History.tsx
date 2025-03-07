import { useNavigate } from 'react-router-dom'

export function History() {
  const navigate = useNavigate()

  return (
    <button type="button" onClick={() => navigate(-1)}>
      Voltar
    </button>
  )
}
