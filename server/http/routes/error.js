var express = require('express');
var router = express.Router();
var log = require('util').log;


router.use(function(req,res,next) {
  log('User tried error code: ' + req.path);
  next();
});
router.get('/100',function(req,res) {
  res.sendStatus(100);
});
router.get('/101',function(req,res) {
  res.sendStatus(101);
});
router.get('/102',function(req,res) {
  res.sendStatus(200);
});
router.get('/200',function(req,res) {
  res.sendStatus(200);
});
router.get('/201',function(req,res) {
  res.sendStatus(201);
});
router.get('/202',function(req,res) {
  res.sendStatus(202);
});
router.get('/203',function(req,res) {
  res.sendStatus(203);
});
router.get('/204',function(req,res) {
  res.sendStatus(204);
});
router.get('/205',function(req,res) {
  res.sendStatus(205);
});
router.get('/206',function(req,res) {
  res.sendStatus(206);
});
router.get('/207',function(req,res) {
  res.sendStatus(207);
});
router.get('/208',function(req,res) {
  res.sendStatus(208);
});
router.get('/226',function(req,res) {
  res.sendStatus(226);
});
router.get('/300',function(req,res) {
  res.sendStatus(300);
});
router.get('/300',function(req,res) {
  res.sendStatus(300);
});
router.get('/400',function(req,res) {
  res.sendStatus(400);
});
router.get('/401',function(req,res) {
  res.sendStatus(401);
});
router.get('/402',function(req,res) {
  res.sendStatus(402);
});
router.get('/403',function(req,res) {
  res.sendStatus(403);
});
router.get('/404',function(req,res) {
  res.sendStatus(404);
});
router.get('/405',function(req,res) {
  res.sendStatus(405);
});
router.get('/*',function(req,res) {
  res.sendStatus(404);
  log('User tried error code: ' + req.path);
});


module.exports = router;