import classNames from 'classnames'

interface Props {
  label: string
  onClick: () => void
  disabled?: boolean
}

const Button = ({ label, onClick, disabled = false }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'rounded-lg bg-zinc-800 px-5 py-3 font-medium shadow-md',
        {
          'opacity-60': disabled,
        },
      )}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button
