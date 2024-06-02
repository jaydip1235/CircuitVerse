# frozen_string_literal: true

class Question < ApplicationRecord
  belongs_to :category
  belongs_to :difficulty_level
end
