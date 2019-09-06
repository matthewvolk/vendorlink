var express = require('express')
var router = express.Router()

const data = {
  vendors: [
    { id: 1, name: "Soft Loft - Magento Developers", rate: 65.00, slug: "petr-datsko", skills: ["Magento", "PHP", "Laravel", "Symfony"], timezone: "@todo", votes: "0" },
    { id: 2, name: "Clawrock - Shopify Developers", rate: 65.00, slug: "sergey-vlasov", skills: ["Magento", "PHP"], timezone: "@todo", votes: "0" },
    { id: 3, name: "Miko Batoon - Web Designer", rate: 40.00, slug: "gaurav-shah", skills: ["Shopify", "Magento"], timezone: "@todo", votes: "0" },
    { id: 4, name: "Jan Smith - Web Designer", rate: 55.00, slug: "jan-smith", skills: ["UI", "UX", "Product Design"], timezone: "@todo", votes: "0" },
    { id: 5, name: "Mohammed Idrees - Magento Developers", rate: 65.00, slug: "mohammed-idrees", skills: ["Magento", "PHP", "Laravel", "Symfony"], timezone: "@todo", votes: "0" },
    { id: 6, name: "Lila Gawrys - Web Designer", rate: 80.00, slug: "lila-gawrys", skills: ["UI", "UX", "Sketch", "Invision"], timezone: "@todo", votes: "0" },
    { id: 7, name: "Jen Meredith - Web Designer", rate: 90.00, slug: "jen-meredith", skills: ["UX", "UI", "Web Design"], timezone: "@todo", votes: "0" },
    { id: 8, name: "Rock Techno Labs - PHP Developers", rate: 25.00, slug: "jeet-rock", skills: ["Magento", "PHP", "Laravel", "Symfony"], timezone: "@todo", votes: "0" },
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