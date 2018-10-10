const FormsSchema = new mongoose.Schema({
    Email: { type: String, default: '' },
    FullName: { type: String, default: '' },
    PhoneNumber: { type: String, default: '' },
    CustomerMessage: { type: String, default: '' },
  });
  
  const Forms = module.exports = mongoose.model('Forms', FormsSchema);
  
  module.exports = Forms;