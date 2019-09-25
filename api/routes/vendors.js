var express = require('express')
var router = express.Router()

const data = {
  vendors: [
    { id: 3, name: "Miko Batoon - Web Designer", rate: 60.00, slug: "miko-batoon", skills: ["UI/UX", "App Design", "Web Design"], timezone: "@todo", votes: "99", contactEmail: "@todo", websiteUrl: "" },
    { id: 1, name: "Soft Loft - Magento Developers", rate: 65.00, slug: "petr-datsko", skills: ["Magento", "PHP", "Laravel", "Symfony"], timezone: "@todo", votes: "80", contactEmail: "@todo", websiteUrl: "https://soft-loft.eu" },
    { id: 2, name: "Clawrock - Shopify Developers", rate: 65.00, slug: "sergey-vlasov", skills: ["Magento", "PHP"], timezone: "@todo", votes: "77", contactEmail: "@todo", websiteUrl: "https://clawrock.com" },
    { id: 4, name: "Jan Smith - Web Designer", rate: 55.00, slug: "jan-smith", skills: ["UI", "UX", "Product Design"], timezone: "@todo", votes: "78", contactEmail: "@todo", websiteUrl: "" },
    { id: 5, name: "Mohammed Idrees - Magento Developers", rate: 65.00, slug: "mohammed-idrees", skills: ["Magento", "PHP", "Laravel", "Symfony"], timezone: "@todo", votes: "64", contactEmail: "@todo", websiteUrl: "https://www.rltsquare.com" },
    { id: 6, name: "Lila Gawrys - Web Designer", rate: 80.00, slug: "lila-gawrys", skills: ["UI", "UX", "Sketch", "Invision"], timezone: "@todo", votes: "55", contactEmail: "@todo", websiteUrl: "" },
    { id: 7, name: "Jen Meredith - Web Designer", rate: 90.00, slug: "jen-meredith", skills: ["UX", "UI", "Web Design"], timezone: "@todo", votes: "88", contactEmail: "@todo", websiteUrl: "http://jenmeredith.com/" },
    { id: 8, name: "Rock Techno Labs - PHP Developers", rate: 25.00, slug: "jeet-rock", skills: ["Magento", "PHP", "Laravel", "Symfony"], timezone: "@todo", votes: "60", contactEmail: "@todo", websiteUrl: "https://rocktechnolabs.com" },
  ]
}

router.get('/', (req, res) => {
  /**
   * @todo
   * connect to database
   * query all vendor data
   * build a JSON object like data above
   */
  res.json(data);
})

router.get('/:id', (req, res) => {
  const vendor = data.vendors.filter(vendor => vendor.slug == req.params.id)
  res.json(vendor[0])
})

router.post('/create', (req, res) => {
  res.json({
    "email": req.body.email,
    "password": req.body.password,
    "first name": req.body.first_name,
    "last name": req.body.last_name,
  })

  /**
   * @todo create vendor with 'active' property set to false
   */
})

router.post('/rankup' , (req, res) => {
  /**
   * @todo 
   * retrieve id of vendor
   * retrieve id of user
   * connect to db
   * add row to UserVendorVotes table
   */
})

router.post('/rankdown' , (req, res) => {
  /**
   * @todo see '/rankup' route todo's
   */
})

module.exports = router