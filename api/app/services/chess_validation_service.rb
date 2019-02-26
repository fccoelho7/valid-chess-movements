module ChessValidationService
  class << self
    def validate_format(input)
      input.match?(/^[A-H][1-9]$/)
    end
  end
end