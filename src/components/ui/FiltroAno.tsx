import { useAnoStore } from '../../store/useAnoStore'

export function FiltroAno() {
  const { ano, setAno } = useAnoStore()
  const anos = Array.from({ length: 6 }, (_, i) => new Date().getFullYear() - i)

  return (
    <select
      value={ano}
      onChange={(e) => setAno(Number(e.target.value))}
      className="input-field max-w-[120px]"
    >
      {anos.map((a) => <option key={a} value={a}>{a}</option>)}
    </select>
  )
}