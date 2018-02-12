class Api::BabesController < ApplicationController
  def index
    @babes = Babe.all
  end

  def show
    @babe = Babe.find(params[:id])
  end

  def create
    @babe = Babe.create!(babe_params)
    render :show
  end

  def babe_params
    params.require(:babe).permit(:name, :age)
  end
end
