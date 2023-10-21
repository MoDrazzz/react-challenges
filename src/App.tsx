import classNames from 'classnames'
import { View } from 'components'
import Button from 'components/Button'
import { useEffect, useState } from 'react'

const HEX_RANGE = 'ABCDEF0123456789'

const getRandomHex = () => {
  let randomHex = '#'

  for (let i = 0; i < 6; i++) {
    randomHex += HEX_RANGE[Math.floor(Math.random() * HEX_RANGE.length)]
  }

  return randomHex
}

const shuffle = (array: string[]) => {
  return array.sort(() => 0.5 - Math.random())
}

const App = () => {
  const [correctColor, setCorrectColor] = useState('')
  const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState<'win' | 'lose' | null>()

  const restartGame = () => {
    const correctColor = getRandomHex()

    setCorrectColor(correctColor)
    setAnswers(shuffle([correctColor, getRandomHex(), getRandomHex()]))
    setResult(null)
  }

  const handleAnswer = (hex: string) => {
    if (hex === correctColor) {
      setResult('win')
    } else {
      setResult('lose')
    }
  }

  useEffect(() => {
    restartGame()
  }, [])

  return (
    <View>
      <div className="relative flex flex-col items-center gap-5">
        <div
          className="h-40 w-80"
          style={{
            backgroundColor: correctColor,
          }}
        />
        <div className="flex gap-3">
          {answers.map((hex, index) => (
            <Button
              key={index}
              label={hex}
              onClick={() => handleAnswer(hex)}
              disabled={!!result}
            />
          ))}
        </div>
        {result && (
          <div className="absolute top-full mt-6 grid justify-items-center gap-2">
            <p
              className={classNames('text-2xl font-semibold', {
                'text-green-500': result === 'win',
                'text-red-500': result === 'lose',
              })}
            >
              {result === 'win' ? 'You are right!' : 'You are wrong!'}
            </p>
            <Button label="Restart Game" onClick={restartGame} />
          </div>
        )}
      </div>
    </View>
  )
}

export default App
