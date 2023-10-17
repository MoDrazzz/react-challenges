import classNames from 'classnames'

interface Props {
  isActive: boolean
  variation: 'red' | 'yellow' | 'green'
}

const Bulb = ({ isActive, variation }: Props) => {
  return (
    <div
      className={classNames('h-20 w-20 rounded-full', {
        'bg-zinc-500': !isActive,
        'bg-red-500': isActive && variation === 'red',
        'bg-yellow-500': isActive && variation === 'yellow',
        'bg-green-500': isActive && variation === 'green',
      })}
    />
  )
}

export default Bulb
