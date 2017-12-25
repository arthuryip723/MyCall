class Api::BabesController < ApplicationController
  def index
    @babes = Babe.all
  end

  def show
    @babe = Babe.find(params[:id])
  end
end
