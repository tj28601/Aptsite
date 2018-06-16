class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end
  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request

    # if @contact.deliver
    #   flash.now[:error] = nil

     if @contact.deliver
             # flash[:notice] = "Thank you for contacting Connaughton & Associates."
             flash[:notice] = "Thanks for your message! We'll get back to you ASAP."
             redirect_to root_path
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end
end
