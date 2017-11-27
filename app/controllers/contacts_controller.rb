class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    contact = Contact.new(contact_params)

    if contact.save
      @contact = Contact.new
      @success = true
    else
      @contact = contact
      @success = false
    end

    render :new
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :content)
  end
end
