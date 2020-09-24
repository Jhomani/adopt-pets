import dogs from '@/data/dogs.js'
import cats from '@/data/cats.js'

export default {
  dogs,
  cats,
  pets: [...dogs, ...cats]
}
