class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def done
  end
end
