require 'rails_helper'
require './app/services/chess_validation_service'

RSpec.describe ChessValidationService do
  let(:service) { described_class }

  describe '#validate_format' do
    describe 'when receiving a valid value' do
      it 'returns true' do
        expect(service.validate_format('A1')).to be_truthy
      end
    end

    describe 'when receiving an invalid value' do
      it 'returns false' do
        expect(service.validate_format('A10')).to be_falsey
      end

      it 'returns false' do
        expect(service.validate_format('I10')).to be_falsey

      end

      it 'returns false' do
        expect(service.validate_format('aI10')).to be_falsey
      end

      it 'returns false' do
        expect(service.validate_format('AA')).to be_falsey
      end
    end
  end
end