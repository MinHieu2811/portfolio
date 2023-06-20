import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorModeValue, Tooltip } from '@chakra-ui/react'
import { TbChartDots3 } from 'react-icons/tb'
import { useToggleBackground } from '../context/toggleBackground'

const BackgroundToggleButton = () => {
  const { setVisibleBackground } = useToggleBackground()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block', marginRight: '10px' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Tooltip label="Toggle particles background">
          <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={<TbChartDots3 />}
            onClick={setVisibleBackground}
          ></IconButton>
        </Tooltip>
      </motion.div>
    </AnimatePresence>
  )
}

export default BackgroundToggleButton
