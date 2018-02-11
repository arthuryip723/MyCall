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
end
