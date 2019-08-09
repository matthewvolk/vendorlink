var express = require('express')
var router = express.Router()

const data = {
  vendors: [
    { id: 1, name: "John Smith", rate: 65.00, slug: "petr-datsko", vendorName: "John Smith" },
    { id: 2, name: "Jane Doe", rate: 65.00, slug: "sergey-vlasov", vendorName: "Jane Doe" },
    { id: 3, name: "Raj Paul", rate: 40.00, slug: "gaurav-shah", vendorName: "Raj Paul" },
    { id: 4, name: "Jan Smith", rate: 55.00, slug: "jan-smith", vendorName: "Jan Smith" },
    { id: 5, name: "Mohammed Idrees", rate: 65.00, slug: "mohammed-idrees", vendorName: "Mohammed Idrees" },
    { id: 6, name: "Lila Gawrys", rate: 80.00, slug: "lila-gawrys", vendorName: "Lila Gawrys" },
    { id: 7, name: "Miko Batoon", rate: 60.00, slug: "miko-batoon", vendorName: "Miko Batoon" },
    { id: 8, name: "Jen Meredith", rate: 90.00, slug: "jen-meredith", vendorName: "Jen Meredith" },
    { id: 9, name: "Praveen Qahil", rate: 20.00, slug: "praveen-qahil", vendorName: "Praveen Qahil" },
    { id: 10, name: "Ankit Patel", rate: 35.00, slug: "ankit-patel", vendorName: "Ankit Patel" },
    { id: 11, name: "Jeet Rock", rate: 25.00, slug: "jeet-rock", vendorName: "Umair Obed" },
  ]
}

router.get('/', (req, res) => {
  res.json(data);
})

router.get('/:id', (req, res) => {
  const vendor = data.vendors.filter(vendor => vendor.slug == req.params.id)
  res.json(vendor[0])
})

module.exports = router